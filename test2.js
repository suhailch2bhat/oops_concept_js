function swirlWords(s){
    out=''
    for(i=0;i<s.length;i++){
      res=''
      if (s[i].length>=5){
  //       console.log(s[i])
        temp=s[i]
        for(j=temp.length-1;j>=0;j--){
          res+=temp[j]
        }
      }
      else{
        res=s[i]
      }
      out+=res+''
    }
    console.log(out)
  }
  s=prompt()
  // s= "Hey  remmas is good "
  // var result = s.split(' ').join().split();
  const result = s.split(' ').join('# #').split('#');
  swirlWords(result)