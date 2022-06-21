function swirlWords(s){
    out=''
        for(i=0;i<s.length;i++){
            res=''
  //           console.log(s[i])
          if (s[i]==="")
             {
  //              console.log(s[i])
               i+=1
             }
          else{
             var isUpperCase = (string) => /^[A-Z]*$/.test(string)
            k=s[i]
  //           console.log(k)
            for(j=0;j<k.length;j++){
              if (i===0 && j===0){
                var m=k[j].toUpperCase();
                res=m
                 j+=1
              }
              if (k[j]==="." )
                {
  //                 console.log(k[j+1].toUpperCase())
                  m=k[j+1].toUpperCase();
                  res+=k[j]+m
                  j+=2
                }
              if(isUpperCase(k[j]) && i!==0){
                res+="."+s[i-1]
              }
              res+=k[j]
          }
            out+=res
          }
        }
          console.log(out)
  }
  s=prompt()
  // s= "john have an   apple The sky is blue.they get a coin"
  // var result = s.split(' ').join().split();
  var result = s.split(' ').join('# #').split('#');
  // console.log(result)
  swirlWords(result)