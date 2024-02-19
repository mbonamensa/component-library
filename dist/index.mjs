function a({
  children: d,
  color: e,
  shape: t,
  textColor: g,
  bgColor: s,
  width: i,
  height: u
}) {
  const l = {
    gray: "bg-gray-100 text-gray-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    indigo: "bg-indigo-100 text-indigo-800",
    purple: "bg-purple-100 text-purple-800",
    pink: "bg-pink-100 text-pink-800"
  }, o = {
    roundedSquare: "rounded-md",
    pill: "rounded-full"
  };
  function c() {
    let r = "";
    const b = Object.keys(o), y = Object.keys(l);
    return b.forEach((n) => {
      t === n && (r += o[t]);
    }), y.forEach((n) => {
      e === n && (r += ` ${l[e]}`);
    }), r;
  }
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `
                ${u}
                ${i}
                ${e}
                ${t}
                p-2 
                text-center 
                font-semibold 
                font-['Inter']
                ${c()} 
                ${g} 
                ${s} 
            `.trim()
    },
    d
  );
}
export {
  a as default
};
