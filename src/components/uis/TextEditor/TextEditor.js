import * as React from 'react';
import {
    CompositeDecorator,
    ContentState,
    Editor,
    EditorState,
    convertFromHTML,
    convertToRaw,
} from 'draft-js';
import { convertToHTML } from "draft-convert"
import { CFormInput } from "@coreui/react"

import { useEditorApi } from './context';

import Icon from "../../Icon"

import iconPlus from "/public/images/icons/plu-opas.svg?sprite"
import iconPreloader from "/public/images/icons/preloader-blue.svg?sprite"
import iconSearch from "/public/images/icons/search-grey.svg?sprite"
import iconX from '/public/images/icons/icon-x.svg?sprite';
import iconOkText from '/public/images/icons/icon-ok-text.svg?sprite'
import iconLeftText from '/public/images/icons/icon-t-left.svg?sprite'
import { isArray } from 'lodash';

const TextEditor = ({
    handleServerRequest = () => { },
    handleServeDispatchContent = () => { },
    devValue = '',
    data = [],
    nTimeMs = 500,
    labelEmpty = "empty list",
    isLoad = false,
    isAddModal = false,
    keys = "name"
}) => {
    const refMod = React.useRef(undefined);
    const editorRef = React.useRef(null);
    const reBtn = React.useRef(undefined);
    const refWr = React.useRef(undefined);
    const refCurentClass = React.useRef(undefined);
    const refIdTimeout = React.useRef(null);
    const refTriger = React.useRef(undefined);
    const refIdDispatchTimeout = React.useRef(null);
    const [modalClass, setmodalClass] = React.useState('');
    const [textSearch, setTextSearch] = React.useState('');
    const { state, onChange } = useEditorApi();

    let isOpen = modalClass.includes('open') ? true : false;

    const focusEditor = () => {
        editorRef.current.focus();
    }

    const handleOnClickAddTextList = (text) => {
        const getHtmlEdit = convertToHTML(state.getCurrentContent());
        let htm = `${getHtmlEdit} <ul><li>${text}</li></ul>`

        const blocksFromHTML = convertFromHTML(htm);

        const states = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
        );

        onChange(EditorState.createWithContent(states));
    }

    React.useEffect(() => {
        const blocksFromHTML = convertFromHTML(devValue);

        const states = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
        );

        onChange(EditorState.createWithContent(states));

        if (isAddModal) {
            const handleClick = (e) => {
                let promis = new Promise(async (resolve, reject) => {
                    await resolve(true);
                });

                promis.then(
                    function (result) {
                        const cordinate = e.target.getBoundingClientRect();
                        const windowInnerHeight = window.innerHeight;

                        if ((windowInnerHeight - cordinate.bottom) > refWr.current.offsetHeight) {
                            setmodalClass(prev => {
                                refCurentClass.current = `${prev} open`;
                                return `${prev} open`;
                            });
                        } else {
                            setmodalClass(prev => {
                                refCurentClass.current = `${prev} pos_bot open`;
                                return `${prev} pos_bot open`;
                            });
                        }
                    },
                    function (error) { /* обработает ошибку */ }
                )
            }

            const handleClickClose = (e) => {
                if (refCurentClass.current == undefined)
                    return;

                if (refCurentClass.current.includes('open')) {
                    if (!e.composedPath().includes(refMod.current)) {
                        let promis = new Promise(async (resolve, reject) => {
                            await setmodalClass('');
                            await resolve(true);
                        });

                        promis.then(
                            function (result) { },
                            function (error) { /* обработает ошибку */ }
                        )
                    }
                }
            }

            !!reBtn?.current && reBtn.current.addEventListener('click', handleClick);
            !!document?.body && document.body.addEventListener('mousedown', handleClickClose);

            return () => {
                !!reBtn?.current && reBtn.current.addEventListener('click', handleClick);
                !!document?.body && document.body.addEventListener('mousedown', handleClickClose);
            }
        }
    }, []);

    React.useEffect(() => {
        if (isAddModal) {
            if (textSearch.length > 0) {

                if (refIdTimeout.current) {
                    clearTimeout(refIdTimeout.current);
                }

                refIdTimeout.current = setTimeout(async () => {
                    await handleServerRequest(textSearch);
                    clearTimeout(refIdTimeout.current);
                }, nTimeMs);
            }
        }
    }, [textSearch]);

    React.useEffect(() => {
        if (refTriger.current === undefined) {
            refTriger.current = "one render";
        } else {
            if (refIdDispatchTimeout.current) {
                clearTimeout(refIdDispatchTimeout.current);
            }

            refIdDispatchTimeout.current = setTimeout(async () => {
                await handleServeDispatchContent(convertToHTML(state.getCurrentContent()));
                clearTimeout(refIdDispatchTimeout.current);
            }, nTimeMs);
        }
    }, [state]);

    return (
        <div className='wr-text-edit'>
            {
                isAddModal && (
                    <>
                        <div className='t-wr-btn'>
                            <button className='wr-btn' ref={reBtn}>
                                <span>Pre-written phrases</span>
                                <Icon svg={isOpen ? iconX : iconPlus} />
                            </button>
                        </div>
                        <div ref={refWr} className={`modal-text ${modalClass}`}>
                            <div className='modal-text__main' ref={refMod}>
                                <div className='modal-text__head'>
                                    <CFormInput
                                        onChange={(e) => setTextSearch(e.target.value)}
                                        value={textSearch}
                                        type="text"
                                        placeholder="Filter phrases by keyword and job title"
                                        name="search"
                                    />
                                    <Icon svg={iconSearch} />
                                </div>
                                <div className='modal-text__content'>
                                    <ul className='scroll-style'>
                                        {
                                            !isLoad ? (
                                                isArray(data) ? (
                                                    !!data.length ? (
                                                        data.map((item, index) => (
                                                            <li onClick={() => handleOnClickAddTextList(item?.[keys] || "")}>
                                                                <span className='text-icon-in'>
                                                                    {/* <Icon svg={iconOkText} /> */}
                                                                    <Icon svg={iconLeftText} />
                                                                </span>
                                                                <div className='text-div-in'>{item?.[keys] || ""}</div>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className={`empty-text`}>{labelEmpty}</li>
                                                    )
                                                ) : (
                                                    <li className={`empty-text`}>{labelEmpty}</li>
                                                )
                                            ) : (
                                                <li className='li-load'>
                                                    <Icon svg={iconPreloader} />
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
            <div onClick={focusEditor}>
                <Editor
                    editorKey="foobaz"
                    ref={editorRef}
                    editorState={state}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default TextEditor;