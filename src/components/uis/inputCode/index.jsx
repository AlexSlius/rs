import { CFormInput } from "@coreui/react"
import React from "react"

import style from "./Style.module.scss"

const InputCode = ({
    setState = () => { }
}) => {
    const [stateNumber, setStateNumber] = React.useState({
        first: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
    });

    let refFieldFirst = React.useRef(undefined);
    let refFieldTwo = React.useRef(undefined);
    let refFieldThree = React.useRef(undefined);
    let refFieldFour = React.useRef(undefined);
    let refFieldFive = React.useRef(undefined);
    let refFieldSix = React.useRef(undefined);

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        let nameNext = e.target.getAttribute('namenext');

        setStateNumber(prev => {
            if (value.length == 0 || value.length < 2) {
                return {
                    ...prev,
                    [name]: value,
                }
            }

            return prev;
        });

        if (value.length == 1) {
            switch (nameNext) {
                case "Two":
                    refFieldTwo.current.focus()
                    break;
                case "Three":
                    refFieldThree.current.focus()
                    break;
                case "Four":
                    refFieldFour.current.focus()
                    break;
                case "Five":
                    refFieldFive.current.focus()
                    break;
                case "Six":
                    refFieldSix.current.focus()
                    break;
            }
        }
    }

    React.useEffect(() => {
        const abjArr = Object.entries(stateNumber);
        let numberString = '';

        abjArr.forEach(([key, value]) => {
            numberString += value;
        });

        setState(numberString);
    }, [stateNumber]);

    return (
        <div className={`${style.rows}`}>
            <div className={`${style.item_filed}`}>
                <CFormInput
                    ref={refFieldFirst}
                    name="first"
                    namenext="Two"
                    type="number"
                    value={stateNumber['first']}
                    placeholder='_'
                    className={`${style.in_code}`}
                    onChange={handleChange}
                />
            </div>
            <div className={`${style.item_filed}`}>
                <CFormInput
                    ref={refFieldTwo}
                    name="two"
                    namenext="Three"
                    value={stateNumber['two']}
                    type="number"
                    placeholder='_'
                    className={`${style.in_code}`}
                    onChange={handleChange}
                />
            </div>
            <div className={`${style.item_filed}`}>
                <CFormInput
                    ref={refFieldThree}
                    name="three"
                    namenext="Four"
                    value={stateNumber['three']}
                    type="number"
                    placeholder='_'
                    className={`${style.in_code}`}
                    onChange={handleChange}
                />
            </div>
            <div className={`${style.item_filed}`}>
                <CFormInput
                    ref={refFieldFour}
                    name="four"
                    namenext="Five"
                    value={stateNumber['four']}
                    type="number"
                    placeholder='_'
                    className={`${style.in_code}`}
                    onChange={handleChange}
                />
            </div>
            <div className={`${style.item_filed}`}>
                <CFormInput
                    ref={refFieldFive}
                    name="five"
                    namenext="Six"
                    value={stateNumber['five']}
                    type="number"
                    placeholder='_'
                    className={`${style.in_code}`}
                    onChange={handleChange}
                />
            </div>
            <div className={`${style.item_filed}`}>
                <CFormInput
                    ref={refFieldSix}
                    name="six"
                    value={stateNumber['six']}
                    type="number"
                    placeholder='_'
                    className={`${style.in_code}`}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default React.memo(InputCode);