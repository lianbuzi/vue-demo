<template v-if="login">
  <div class="login">
    <h1>{{ msg }}</h1>
    <div class="table-hr">
    	<label for="username">User Name：</label>
    	<input type="text" v-model='username' id="username">
    </div>
     <div class="table-hr">
    	<label for="password">Password：</label>
    	<input type="password" v-model='password' id="password" v-if='show'>
    	<input type="text" v-modle='password2' id="password" v-if='!show' :value="password"> 
    	<span class="a" @click="show=!show">明码展示</span>
    </div>
    <div class="botton">
    	<button> login</button>
    	<button> regist</button>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Login',
      show:true,
      login:true,
      username:'',
      password:''

    }
  },
  methods:{
  	submit (){
  		let userInfo={}
  			userInfo.name=this.username;
  			userInfo.pwd=this.password;
  			this.$emit('getUserData',JSON.stringify(userInfo))
  		}
  	
  }
}
</script>
<style scoped>
	.table-hr{
		margin:10px 0;
	}
	label{
		display: inline-block;
    width: 99px;
	}
	.botton{
		display: -webkit-flex;
		justify-content:center; 	
	}
	button{
		padding:2px 10px;
		font-size:14px;
		margin-left: 70px
	}
	.a{
		font-size:12px;
		text-decoration: underline;
		display: block;
	}
	.a:hover{
		cursor: pointer;
	}
</style>
