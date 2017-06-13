<template>
	<div class='addUser'>

		<ul>
			<li>
				<label for="">姓名:</label>
				<input type="text" v-model='username' :value='editData.username'>
			</li>
			<li>
				<label for="">生日:</label>
				<input type="date" v-model='birthDate'>
			</li>
			<li>
				<label for="">薪资:</label>
				<input type="text" v-model='salary'>
			</li>
			<li>
				<button @click="edit" v-if="type==='edit'">编辑</button>
		
				<button @click="saveData" v-else>提交</button>
				</li>	
		</ul>
	</div>
</template>	
<script>
	export default{
		name:'addUser',
		data (){
			return{
				msg:'添加用户信息',
				username:'',
				birthDate:"",
				salary:'',
				type:'add'

			}
		},
		watch:{
			editData (){
				this.changeData()
			}
			
				
		},
		mounted (){
			this.changeData()
		
		},
		props:['editData'],
		methods:{
			saveData(){

				this.$emit('saveData',{username:this.username,birthDate:this.birthDate,salary:this.salary,type:this.type})
			},
			changeData(){
					if(this.editData){
						this.username=this.editData.username;
						this.birthDate=this.editData.birthDate;
						this.salary=this.editData.salary;
						this.type=this.editData.type
					}
					
			},
			edit(){
				this.$emit('edit',{username:this.username,birthDate:this.birthDate,salary:this.salary,type:this.type,index:this.editData.index})
			}
		}
	}

</script>
<style scoped>
ul,li{
	list-style: none
}
li{

}
	.table-hr{
		margin:10px 0;
	}
	label{
		display: inline-block;
    width: 59px;
	}
	input{
		width:150px;
		margin:10px 0;
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