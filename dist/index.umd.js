(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e["react-component-library"]=t())})(this,function(){"use strict";function e({children:t,color:n,shape:r,textColor:s,bgColor:u,width:c,height:f}){const l={gray:"bg-gray-100 text-gray-800",red:"bg-red-100 text-red-800",yellow:"bg-yellow-100 text-yellow-800",green:"bg-green-100 text-green-800",blue:"bg-blue-100 text-blue-800",indigo:"bg-indigo-100 text-indigo-800",purple:"bg-purple-100 text-purple-800",pink:"bg-pink-100 text-pink-800"},d={roundedSquare:"rounded-md",pill:"rounded-full"};function g(){let o="";const p=Object.keys(d),y=Object.keys(l);return p.forEach(i=>{r===i&&(o+=d[r])}),y.forEach(i=>{n===i&&(o+=` ${l[n]}`)}),o}return React.createElement("div",{className:`
                ${f}
                ${c}
                ${n}
                ${r}
                p-2 
                text-center 
                font-semibold 
                font-['Inter']
                ${g()} 
                ${s} 
                ${u} 
            `.trim()},t)}return e});
