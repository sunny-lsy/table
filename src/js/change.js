class change{

    constructor(){
       this.init();
    }
    init(){
        this.createWrap();
        this.hide();

    }
    createList(){
        let ol = document.createElement('ol');
        for(var i=0;i<3;i++){
            let li = document.createElement('li');
            li.innerHTML = 'li'+i;
            ol.append(li);
        }
            return ol;
    }
     addEvent(){
          const ol = document.querySelector('ol');
          const lis = ol.getElementsByTagName('li');
          let _this = this;
          [...lis].forEach(function(item,index){
              item.addEventListener('click',function(){
                const ol = document.querySelector('ol');
                const lis = ol.getElementsByTagName('li');
                [...lis].forEach(function(item,index){
                    item.style.background='#ffff';
                    item.style.color='black';
                });
                        const ul = document.querySelector('ul');
                const lies = ul.getElementsByTagName('li');
                [...lies].forEach(function(item,index){
                item.style.display='none';
                })
            _this.hide(index);
            _this.addClass(index);
        })
          })
     }
    hide(suffix){
        const ul = document.querySelector('ul');
        const lis = ul.getElementsByTagName('li');
        [...lis].forEach(function(item,index){
            if(suffix==index){
                item.style.display='block';
            }
        })
    }
    addClass(suffix){
         const ol = document.querySelector('ol');
         const ois = ol.getElementsByTagName('li');
         [...ois].forEach(function(item,index){
             if(suffix==index){
                 item.style.background='red';
                 item.style.color='#ffff'
             }
         })
    }
   createContent(){
        let ul = document.createElement('ul');
        for(var i=0;i<3;i++){
            let li = document.createElement('li');
            li.innerHTML = '内容'+i;
            ul.append(li);
        }
            return ul;
   }
    createWrap(){
        let div = document.createElement('div');
        div.className = 'wrap';
        let cOl = this.createList();
        let cUl = this.createContent();
        div.append(cOl);
        div.append(cUl); 
        document.body.appendChild(div);
        this.addEvent();
    }
}
export default change;