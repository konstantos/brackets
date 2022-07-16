module.exports = function check(str, conf) {

  if (str.length % 2 != 0) {
    return false;
  }  

  let st = str;
  let cnt = 0;  

  while (st.length != 0) {
      for (let i = 0; i < conf.length; i++) {
          if (st.includes(conf[i].join(""))) {
              st = st.split(conf[i].join("")).join("");
              cnt++;
          } 
      }

      if (cnt == 0) return false  
      else cnt = 0;
  }

  return true;
}
