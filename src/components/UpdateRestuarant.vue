

<template>
    <HeaderPage />
    <div>
        <h1>Hello! Welcome Update Restuarant Page </h1>
    </div>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restuarant.name" name="name" />
        <input type="text" placeholder="Enter Address" v-model="restuarant.address" name="address" />
        <input type="text" placeholder="Enter Contact" v-model="restuarant.contact" name="contact" />
        <button type="button" v-on:click="updateRestuarant">Update Restuarant</button>
    </form>
</template>
<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'UpdateRestuarant',
    components:
    {
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
        async updateRestuarant() {
            const result = await axios.put("http://localhost:3000/restuarant/" + this.$route.params.id, {
                name: this.restuarant.name,
                address: this.restuarant.address,
                contact: this.restuarant.contact,
            });
            if (result.status == 200) {
                this.$router.push({ name: 'Home' });
            }

        }
    },

    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'Signup' })
        }
        const result = await axios.get("http://localhost:3000/restuarant/" + this.$route.params.id);
        // console.warn(result.data)
        this.restuarant = result.data

    }

}
</script>

<style>

</style>