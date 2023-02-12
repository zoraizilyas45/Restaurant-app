

<template>
    <HeaderPage />
    <div>
        <h1>Hello {{ name }}, Welcome to Home Page </h1>
    </div>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restuarants" :key="item.div">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td><router-link :to="'/update-restuarant/' + item.id">Update</router-link>
                <button v-on:click="deleteRestuarant(item.id)">Delete</button>
            </td>
        </tr>
    </table>

</template>
<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restuarants: [],
        }
    },
    components: {
        HeaderPage
    },
    methods: {
        async deleteRestuarant(id) {
            console.warn(id)
            let result = await axios.delete("http://localhost:3000/restuarant/" + id);
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem("user-info");
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: 'Signup' })
            }
            let result = await axios.get("http://localhost:3000/restuarant");
            this.restuarants = result.data;
        }
    },


    mounted() {
        this.loadData()
    }

}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>