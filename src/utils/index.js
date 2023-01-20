export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export async function dataUrlToFIle(dataUrl) {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], 'avatar', { type: 'image/png' });
}

export function formatDate(date) {
  if (!!date) {
    date = date;
  } else {
    date = new Date();
  }

  const dateObject = date !== '' ? new Date(date) : new Date();
  
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric'
  }).format(dateObject);
}


export const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);



export function convertDate(date) {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return (day < 10 ? '0' + day : day) + '.' + (month < 10 ? '0' + month : month) + '.' + year;
}



export const prewriteList = [
  { id: '1', text: 'Worked to ensure a positive and hassle-free customer experience.\n', selected: false },
  { id: '2', text: 'Settled any customer disputes in a professional and pleasant manner.\n', selected: false },
  { id: '3', text: 'Identified and maximized sales opportunities, and increased customer retention rates.\n', selected: false },
  { id: '4', text: 'Helped to increase customer return rates by providing excellent customer service at all times.\n', selected: false },
  { id: '5', text: 'Maintained up-to-date knowledge of all retail promotions 1111.\n', selected: false },
  { id: '6', text: 'Maintained up-to-date knowledge of all retail promotions 2222.\n', selected: false },
  { id: '7', text: 'Maintained up-to-date knowledge of all retail promotions 3333.\n', selected: false }
];


export function formatValues(values) {
  let res;

  function formatDate(newEl) {
    for (let key in newEl) {
      let timestamp = Date.parse(newEl[key]);
      let dStr = new Date(timestamp).toString();
      if (newEl[key] === dStr) {
        newEl[key] = convertDate(newEl[key]);
      }
    }

    return newEl;
  }

  if (Array.isArray(values)) {
    res = values.map(el => {
      let newEl = { ...el };
      return formatDate(newEl);
    })
  } else if (typeof values === 'object') {
    let newEl = { ...values };
    res = formatDate(newEl);
  }

  return res;
}