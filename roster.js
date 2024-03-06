// var qrcode = new QRCode("qrcode");

// function makeCode () {		
// 	var elText = document.getElementById("text");
	
// 	if (!elText.value) {
// 		alert("Input a text");
// 		elText.focus();
// 		return;
// 	}
	
// 	qrcode.makeCode(elText.value);
// }

// makeCode();

// $("#text").
// 	on("blur", function () {
// 		makeCode();
// 	}).
// 	on("keydown", function (e) {
// 		if (e.keyCode == 13) {
// 			makeCode();
// 		}
// });


const app = Vue.createApp({
    data(){
        return {
            teamName: "",
            posList: ['','DH','P','C','1B','2B','3B','SS','LF','CF','RF'],
            players: [],
        }
    },
    methods: {
        addPlayer(pName, pPos, bNo){
            this.players.push({pName,pPos,bNo})
            this.pName = ""
            this.pPos = ""
            this.bNo = ""
            this.$refs.iName.focus()
        },
    },
    mounted(){
        this.$refs.iName.focus()
    }
})

app.mount('#app')