/*
Dynamic Typing -> JavaScript ek dynamically typed language hai, jiska matlab hai ki variables ko declare karte waqt unka data type specify karna zaroori nahi hota. Aap kisi variable mein kisi bhi type ki value assign kar sakte hain, aur baad mein us variable ki type ko change bhi kar sakte hain.
*/


// typeof quirk -> JavaScript mein typeof operator ka use karke aap kisi variable ya value ka data type check kar sakte hain. Lekin kuch quirks hain jo dhyan mein rakhne chahiye:

// 1. typeof null -> null ka typeof "object" return karta hai, jo ki ek historical bug hai. Iska matlab ye nahi hai ki null ek object hai, balki ye ek primitive value hai jo intentionally kisi bhi object ko refer nahi karti.

// 2. typeof array -> arrays ka typeof bhi "object" return karta hai, kyunki arrays bhi objects hi hote hain. Agar aapko specifically check karna hai ki koi value array hai ya nahi, to aap Array.isArray() method ka use kar sakte hain.

// 3. typeof function -> functions ka typeof "function" return karta hai, jo ki ek special type hai jo callable objects ko represent karta hai.
