import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useFormikContext } from "formik";


export const withLogic = (Component) => {
    return (props) => {
        const {
            initialState,
            addText,
            updateText,
            valuesFromStore,
            ...rest
        } = props;


        const { setValues: setFormikValues} = useFormikContext();
        const storeValues = valuesFromStore;
        const [selectedValueId, setSelectedValueId ]= useState(null);
        const [localValue, setLocalValue] = useState({ ...initialState});
        let [values, setValues] = useState(storeValues);

        useEffect(() => {
            const value = values.find(value => value.id === selectedValueId);
            if(value) {
              setLocalValue(value);
            } else {
              setLocalValue({...initialState, id: uuid()});
            }
          }, [selectedValueId]);
        
        useEffect(() => {
            setFormikValues(values);
        }, [values, setFormikValues]);
        

        useEffect(()=>{
            setValues(valuesFromStore)
        },[valuesFromStore]);

        const handleValueAdd = (e) => {
            e.preventDefault();
            setValues(prev => {
                return [...prev, {...localValue, id: uuid()}];
            })
            let id = uuid();
            setLocalValue({...initialState, id});
            setSelectedValueId(id);
        };
    
        const handleValueUpdate = (id, e) => {
            e.preventDefault();
            setValues(prev => {
                const index = prev.findIndex(el => el.id === id);
                const before = prev.slice(0, index);
                const after = prev.slice(index + 1);
                return [...before, {...localValue}, ...after];
            });
            setSelectedValueId(null);
        }
        
        const handleSelect = (id) => {
            if(!selectedValueId || selectedValueId !== id) {
                setSelectedValueId(id);
            } else {
                setSelectedValueId(null);
            }   
        };
        
        const handleDelete = (id, e) => {
            e.stopPropagation();
            setValues(prev => {
                return prev.filter(el => el.id !== id);
            })
            setSelectedValueId(null);
        };
        
        const handleInput = (event, name, text) => {
            if(event) {
                if(!(event instanceof Date)) {
                    setLocalValue((state) => ({ ...state, [name]: event.target.value }));
                } else {
                    setLocalValue((state) => ({ ...state, [name]: String(event) }));
                }
            } else {
                setLocalValue((state) => ({ ...state, [name]: text }));
            }
        };

          return (
            <Component 
                dataValues={values}
                localValue={localValue}
                selectedValueId={selectedValueId}
                handleValueAdd={handleValueAdd}
                handleValueUpdate={handleValueUpdate}
                handleSelect={handleSelect}
                handleDelete={handleDelete}
                handleInput={handleInput}
                addText={addText}
                updateText={updateText}
                {...rest}
            />
          )
    }
}