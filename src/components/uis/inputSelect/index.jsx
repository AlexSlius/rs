import { CFormInput } from "@coreui/react"
import { isArray, isString } from "lodash";
import React, { useEffect, useState } from "react"

import { theFirstHeaderCharacter } from "../../../helpers/strings";

import style from "./Style.module.scss"
import iconPlus from "/public/images/icons/plu-opas.svg?sprite"
import iconPreloader from "/public/images/icons/preloader-blue.svg?sprite"
import Icon from "../../Icon"

export const InputSelect = ({
    handleSaveSelect = () => { },
    handleChallenge = () => { },
    handleOpenChangle = () => { },
    handleAddNew = () => { },
    handleServerRequest = () => { },
    label = '',
    placeholder = '',
    isLoad = false,
    isBackgraundLoad = false,
    invalid = false,
    isFirstList = true,
    valueState = '',
    name = '',
    data = [],
    keyName = "name",
    keyText = "name",
    labelEmpty = "empty list",
    isAddDiv = false,
    obj,
    nTimeMs = 500,
    isOutDataObj = true,
    isCouValid = true,
    isModal = true,
    isIconArrow = false
}) => {
    const refSelect = React.useRef(undefined);
    const reIn = React.useRef(undefined)
    const refWr = React.useRef(undefined)
    const refCurentClass = React.useRef(undefined)
    const refIdActiveItem = React.useRef(false)
    const refIdTimeout = React.useRef(undefined);
    const [showList, setShowlist] = React.useState(false)
    const [className, setClassName] = React.useState('')
    const classBgLoad = isBackgraundLoad ? style.load_bg : ''

    const isValid = valueState?.id != undefined;
    const dopClass = isIconArrow ? style.iconArrow : '';

    const handleOnChange = (e) => {
        let out = !!isOutDataObj ? { [keyText]: e.target.value } : e.target.value;
        handleSaveSelect({ name, value: out });
    }

    const handledOnBlur = () => {
    }

    const onFocus = () => {
        if (!isFirstList) {
            setShowlist(false);
        }
    }

    const handleOnClickSelect = (data) => {
        refIdActiveItem.current = data?.id;

        let prop = new Promise(async (resolve, reject) => {
            await setClassName('');
            await resolve(true);
        });

        prop.then(
            function (result) {
                let out = !!isOutDataObj ? data : data[keyText];
                handleSaveSelect({ name, value: out, isClisk: true }, data);
                handleChallenge(data);
            },
            function (error) { }
        )
    }

    React.useEffect(() => {
        if (isModal) {
            const handleClick = (e) => {
                let promis = new Promise(async (resolve, reject) => {
                    // await setShowlist(true);
                    await resolve(true);
                });

                promis.then(
                    function (result) {
                        const cordinate = e.target.getBoundingClientRect();
                        const windowInnerHeight = window.innerHeight;

                        if ((windowInnerHeight - cordinate.bottom) > refWr.current.offsetHeight) {
                            setClassName(prev => {
                                refCurentClass.current = `${prev} ${style.open}`;
                                return `${prev} ${style.open}`;
                            });
                        } else {
                            setClassName(prev => {
                                refCurentClass.current = `${prev} ${style.open_top} ${style.open}`;
                                return `${prev} ${style.open_top} ${style.open}`;
                            });
                        }
                    },
                    function (error) { /* обработает ошибку */ }
                )
            }

            const handleClickClose = (e) => {
                if (refCurentClass.current == undefined)
                    return;

                if (refCurentClass.current.includes(style.open)) {
                    if (!e.composedPath().includes(refSelect.current)) {
                        let promis = new Promise(async (resolve, reject) => {
                            await setClassName('');
                            await resolve(true);
                        });

                        promis.then(
                            function (result) {
                                // setShowlist(false);
                            },
                            function (error) { /* обработает ошибку */ }
                        )
                    }
                }
            }

            // это нужно будет проверить для рендера не сервера
            if (typeof window != 'undefined') {
                setShowlist(true);
            }

            !!reIn?.current && reIn.current.addEventListener('focus', handleClick);
            !!document?.body && document.body.addEventListener('mousedown', handleClickClose);

            return () => {
                !!reIn?.current && reIn.current.addEventListener('focus', handleClick);
                !!document?.body && document.body.addEventListener('mousedown', handleClickClose);
            }
        }
    }, []);

    useEffect(() => {
        if (isModal) {
            if (className.includes(style.open)) {
                handleOpenChangle();
            }
        }
    }, [className]);

    useEffect(() => {
        if (isModal) {
            if (!isFirstList && (!!isOutDataObj ? valueState[keyText]?.length : valueState?.length) > 0) {
                setShowlist(true);

                if (refIdTimeout.current) {
                    clearTimeout(refIdTimeout.current);
                }

                refIdTimeout.current = setTimeout(async () => {
                    await handleServerRequest(!!isOutDataObj ? valueState[keyText] : valueState);
                    clearTimeout(refIdTimeout.current);
                }, nTimeMs);
            }
        }
    }, [(!!isOutDataObj ? valueState[keyText] : valueState)])

    return (
        <div ref={refSelect} className={`${style.mob_select} ${className} dom_mob_select`}>
            <div className={`${style.mod_filed} ${dopClass}`}>
                <CFormInput
                    onChange={handleOnChange}
                    onBlur={handledOnBlur}
                    onFocus={onFocus}
                    ref={reIn}
                    floatingLabel={label}
                    placeholder={placeholder}
                    floatingClassName={style.contoll}
                    invalid={!!invalid}
                    valid={isCouValid ? !!isValid : false}
                    name={name}
                    value={!!isOutDataObj ? valueState[keyText] || '' : valueState || ''}
                    type="text"
                    {...obj}
                />
            </div>
            {
                isModal && (
                    <div ref={refWr} className={`${style.wr}`}>
                        {
                            showList && (
                                <div className={`${style.wr__list} ${classBgLoad}`}>
                                    <ul className={`${style.list} scroll-style`}>
                                        {
                                            isLoad ? (
                                                <li className={`${style.list__li_load}`}>
                                                    <Icon svg={iconPreloader} />
                                                </li>
                                            ) : (
                                                <>
                                                    {
                                                        isAddDiv && !isValid && (!!isOutDataObj ? !!valueState[keyText] : valueState) && (
                                                            <li className={`${style.list__li} ${style.list__li_first}`}>
                                                                <span>{!!isOutDataObj ? valueState[keyText] : valueState || ''}</span>
                                                                <div className={`${style.rig}`}>
                                                                    <button className={`${style.button_add}`} onClick={handleAddNew} title="Add to list?" type="button">
                                                                        <Icon svg={iconPlus} classNames={[style.button_add_icon]} />
                                                                    </button>
                                                                </div>
                                                            </li>
                                                        )
                                                    }
                                                    {
                                                        isArray(data) ? (
                                                            !!data.length ? (
                                                                data.map((item, index) => {
                                                                    let activeClassItem = '';
                                                                    let textOutItem = isString(item[keyName]) && item[keyName].toLowerCase().includes(!!isOutDataObj ? valueState[keyText]?.toLowerCase() : valueState?.toLowerCase(), 0);
                                                                    let textFirst = '';
                                                                    let textLast = '';

                                                                    if (item[keyName] == (!!isOutDataObj ? valueState[keyText] : valueState)) {
                                                                        activeClassItem = style.active;
                                                                    }

                                                                    if (((!!isOutDataObj ? valueState[keyText]?.length : valueState?.length) > 0) && !textOutItem) {
                                                                        return;
                                                                    } else if ((!!isOutDataObj ? valueState[keyText]?.length : valueState?.length) == 0 || (!!isOutDataObj ? valueState[keyText] : valueState) == undefined) {
                                                                        textLast = item[keyName];
                                                                    } else if (((!!isOutDataObj ? valueState[keyText]?.length : valueState?.length) > 0) && textOutItem) {
                                                                        textLast = item[keyName].toLowerCase().replace((!!isOutDataObj ? valueState[keyText] : valueState)?.toLowerCase(), '');
                                                                        textFirst = theFirstHeaderCharacter((!!isOutDataObj ? valueState[keyText] : valueState));
                                                                    }

                                                                    return (
                                                                        <li key={index} className={`${style.list__li}`}>
                                                                            <button
                                                                                className={`${style.button} 
                                                                        ${activeClassItem}`}
                                                                                type="button"
                                                                                onClick={() => handleOnClickSelect(item)}
                                                                            >
                                                                                {!!textFirst && <span>{textFirst}</span>}{textLast}
                                                                            </button>
                                                                        </li>
                                                                    )
                                                                })
                                                            ) : (
                                                                <li className={`${style.list__li} ${style.list__li_no}`}>{labelEmpty}</li>
                                                            )
                                                        )
                                                            : (
                                                                <li className={`${style.list__li} ${style.list__li_no}`}>{labelEmpty}</li>
                                                            )
                                                    }
                                                </>
                                            )
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}