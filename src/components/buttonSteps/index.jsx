import { CButton } from "@coreui/react"
import Router from "next/router";

import { LoadChildrenBtn } from "../loadChildrenBtn"
import { isLoader } from "../../helpers/loadings"

import { routerLinksAsideMenu } from "../../constants/next-routers";

import style from "./Style.module.scss";
import { isObject } from "lodash";

const nextofLink = (linksObj, path) => {
    if (!isObject(linksObj))
        return false;

    let arrkeys = Object.keys(linksObj);
    let len = arrkeys.length - 1;
    let nextLink = undefined;


    arrkeys.map((key, index) => {
        if (len != index)
            console.log(222);
        if (linksObj[key].link == path) {
            nextLink = linksObj[arrkeys[index + 1]]?.link
        }
    });

    return nextLink;
}

const prevOfLink = (linksObj, path) => {
    if (!isObject(linksObj))
        return false;

    let arrkeys = Object.keys(linksObj);
    let prevLink = undefined;

    arrkeys.map((key, index) => {
        if (linksObj[key].link == path) {
            if (index != 0)
                prevLink = linksObj[arrkeys[index - 1]]?.link
        }
    });

    return prevLink;
}

export const ButtonSteps = ({
    loadBtnNext = false,
    loadBtnPrev = false,
    isFirstStep = false,
    isLastStep = false,
    textBtnNext = "Continue",
    textBtnPrev = "Skip this step",
    isAthorized = false,
    onHandleBtnNext = () => { },
    onHandleBtnPrev = () => { },
}) => {
    const clickNext = () => {
        let pathName = Router.pathname;
        if (isAthorized) {
            let linkNext = nextofLink(routerLinksAsideMenu, pathName);

            if (!!linkNext)
                Router.push(linkNext);
        } else {
            onHandleBtnNext();
        }
    }

    const clickPrev = () => {
        let pathName = Router.pathname;
        let linkPrev = prevOfLink(routerLinksAsideMenu, pathName);

        if (!!linkPrev)
            Router.push(linkPrev);

        onHandleBtnPrev();
    }

    return (
        <div className={`${style.wr}`}>
            <div className={`${style.row}`}>
                {
                    !isFirstStep && (
                        <div>
                            <LoadChildrenBtn isLoad={isLoader(loadBtnPrev)}>
                                <CButton type="button" className={`${style.btn} ${style.btn_prev}`} onClick={clickPrev}>{textBtnPrev}</CButton>
                            </LoadChildrenBtn>
                        </div>
                    )
                }
                {
                    !isLastStep && (
                        <div>
                            <LoadChildrenBtn isLoad={isLoader(loadBtnNext)}>
                                <CButton type="button" className={`${style.btn} ${style.btn_next}`} onClick={clickNext} >{textBtnNext}</CButton>
                            </LoadChildrenBtn>
                        </div>
                    )
                }
            </div>
        </div>
    )
}