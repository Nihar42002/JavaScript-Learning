
function vowels(msg)
{
for(let i = 0; i < msg.length; i++)
    {
        if (msg[i] ===  "a" || msg[i] ===  "i" || msg[i] === "u" || msg[i] === "o" || msg[i] === "e")
        {
        console.log(msg[i]);
        }
    } 
}

vowels("hello");