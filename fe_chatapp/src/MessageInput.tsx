import React, { useState } from 'react'

function MessageInput({ send }: { send: (val: string) => void }) {
    const [value, setValue] = useState("")
    return (
        <>
            <input placeholder='Type your message here...' value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => send(value)}>Send</button>
        </>
    )
}

export default MessageInput