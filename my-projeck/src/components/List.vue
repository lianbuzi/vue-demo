<template>
	<div class="list">

		<h1>{{ msg }}</h1>
		<button @click='addData'>添加</button>
		<AddUser v-on:saveData='saveData' v-if='userContent' :editData='editData'v-on:edit="editList"></AddUser>
		<ul class="data-table">
			<li>
				<div>全选<input type="checkbox" v-model="checkedAll" @change='changeState'></div>
				<div>照片</div>
				<div>姓名</div>
				<div>薪资</div>
				<div>出生日期</div>
				<div>操作</div>

			</li>

			<li v-for='(item,index) in userData.data'>
				<input type="checkbox"  v-model='checkModel' :value='item.username' > 
				<div><img v-bind:src="item.img"/></div>
				<div>{{item.username}}</div>
				<div>{{item.salary | currency}}</div>
				<div>{{item.birthDate}}</div>
				<div class="edit"><span @click="deleteUser(index)">删除</span>/<span @click="editUser(index)">编辑</span></div>
			</li>


		</ul>

	</div>
</template>

<script>
	import Vue from 'vue'
	import Request from 'vue-resource'
	import AddUser from './AddUser'
	Vue.use(Request)
	export default {
		name: 'list',
		components:{
			AddUser
		},
		data () {
			return {
				msg: 'List Page',
				checkedAll:false,
				checkModel:[],
				userContent:false,
				editData:'',
				userData:{
					"state":"success",
					"stateCode":"01",
					"data":[{
						"img":"../assets/logo.png",
						"username":"sucy",
						"salary":'10',
						"birthDate":"1990-03-09"
					},
					{
						"img":"../img/logo.png",
						"username":"papei",
						"salary":'15',
						"birthDate":"2010-03-33"
					}
					,{
						"img":"../img/logo.png",
						"username":"Johe",
						"salary":'20',
						"birthDate":"2016-01-23"
					}

					]
				}
			}
		},
		watch:{
			checkModel:{
				handler (){
					if(this.checkModel.length==this.userData.data.length){
						this.checkedAll=true
					}else{
						this.checkedAll=false
					}
				},
				deep:true
			}
		},
		filters:{
			currency:function(value){
				return value+'k/月'		
			}
		},
		methods:{
			getUserData (){
			},
			changeState(item){
				this.checkModel=[] 
				if(this.checkedAll==true){
					this.userData.data.forEach((value,index)=>{
						this.checkModel.push(value.username)
					});
				}
			},
			mounted:function(){
				this.getUserData()	
			},
			editList(data){
				let index=data.index;
				this.userContent=false;
				for(var v in data){
					this.userData.data[index][v]=data[v]
				}
				
			},
			addData(){
				this.userContent=true;
				this.editData={type:'add'}
			},
			saveData(obj){
				this.userContent=false
				this.userData.data.push(obj)
			},
			deleteUser(index){
				this.userData.data.splice(index,1)
			},
			editUser(index){
				this.userContent=true;
				this.editData=this.userData.data[index];
				this.editData.type='edit';
				this.editData.index=index
			}
		}
	}
</script>
<style scoped>
	ul,li{
		list-style:none;
	}
	.data-table li:nth-child(2n+1){
		background:#efefef;
	}
	.data-table li:first-child{
		background: #ccc
	}

	.data-table li{
		display: -webkit-flex;
		justify-content:space-around;
		padding:5px 0;
		align-items: flex-start;
		border-bottom: 1px solid #ddd
		
	}

	.data-table li>div{
		display: flex3
	}
	.edit{
		cursor: pointer
	}

</style>