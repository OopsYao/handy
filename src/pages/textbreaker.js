import React from 'react';
// import breaker from '../textbreaker';
import {
    readText,
    // writeText,
} from '../utils';

const base64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
        reader.onload = () => {
            resolve(reader.result);
        };
    });
}

const handle = _ => {
    (async () => {
        try {
            const text = await readText();
            console.log(text);
            for (const item of text) {
                if (item.types !== "image/png") {
                    alert("Clipboard contains non-image data. Unable to access it.");
                } else {
                    const blob = await item.getType("image/png");
                    const imgBase64 = await base64(blob);
                    console.log(imgBase64);
                }
            }
            // const chunklist = breaker(text, 20);
            // writeText(chunklist.join('\n'));
        } catch {

        }
    })();
}
export default () => (
    <div>
        <button onClick={handle}>CLICK</button>
    </div>
)