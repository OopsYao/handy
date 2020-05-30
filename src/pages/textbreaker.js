import React from 'react';
import breaker from '../textbreaker';

const handle = _ => {
    (async () => {
        const fail = state => !(state === 'granted' || state === 'prompt');
        const { state: read } = await navigator.permissions.query({ name: 'clipboard-read' });
        if (fail(read)) return;
        const text = await navigator.clipboard.readText()
        const chunklist = breaker(text, 20)

        const { state: write } = await navigator.permissions.query({ name: "clipboard-write" });
        if (fail(write)) return;
        navigator.clipboard.writeText(chunklist.join('\n'))
    })();
}
export default () => (
    <div>
        <button onClick={handle}>CLICK</button>
    </div>
)