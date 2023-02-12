

<template>
    <HeaderPage />
    <div>
        <h1>Hello! Welcome Add Restuarant Page </h1>
    </div>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restuarant.name" name="name" />
        <input type="text" placeholder="Enter Address" v-model="restuarant.address" name="address" />
        <input type="text" placeholder="Enter Contact" v-model="restuarant.contact" name="contact" />
        <button type="button" v-on:click="addRestuarant">Add New Restuarant</button>
    </form>
</template>
<script>

import axios from 'axios';
import HeaderPage from './HeaderPage.vue';

export default {
    name: 'AddRestuarant',
    components: {
        HeaderPage
    },
    data() {
        return {
            restuarant: {
                name: '',
                address: '',
                contact: '',
            }
        }

    },
    methods: {
        async addRestuarant() {
            console.log(this.restuarant)
            const result = await axios.post("http://localhost:3000/restuarant", {
                name: this.restuarant.name,
                address: this.restuarant.address,
                contact: this.restuarant.contact,
            });
            if (result.status == 201) {
                this.$router.push({ name: 'Home' });
            }

        },
    },


    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'Signup' })
        }
    }

}
</script>

<style>

</style>