import {
    CompositeDecorator,
    ContentState,
    Editor,
    EditorState,
    convertFromHTML,
    convertToRaw,
} from 'draft-js';
import { convertToHTML } from "draft-convert"
import * as React from 'react';


export const useEditor = () => {
    const [state, setState] = React.useState(() => EditorState.createEmpty());
    // console.log(convertToHTML(state.getCurrentContent())); // повертає html
    // console.log(JSON.stringify(convertToRaw(state.getCurrentContent()).blocks)); повертає об'єкт

    // React.useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         const sampleMarkup =
    //             `<p>Settled any customer disputes in a professional and pleasant manner.</p>
    //              <ul>
    //              <li>Settled any customer disputes in a professional and pleasant manner.</li>
    //              <li>Helped to increase customer return rates by providing excellent customer service at all times.</li>
    //              <li>Maintained up-to-date knowledge of all retail promotions.</li>
    //              </ul>`;

    //         const blocksFromHTML = convertFromHTML(sampleMarkup);

    //         const states = ContentState.createFromBlockArray(
    //             blocksFromHTML.contentBlocks,
    //             blocksFromHTML.entityMap
    //         );

    //         console.log(EditorState.createWithContent(states));

    //         setState(EditorState.createWithContent(states));
    //     }
    // }, []);

    return React.useMemo(() => ({
        state,
        onChange: setState
    }), [state])
}