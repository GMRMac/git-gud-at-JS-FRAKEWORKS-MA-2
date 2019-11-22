<template>
    <div class="card">
        <div class="col-sm-12">
            <div class="d-flex justify-content-center">
                <img :src="recipeImg">
            </div>
        </div>
        <div class="card--information">
            <h4 class="text-center">{{ title }}</h4>
            <br>
                <p>{{ ingredients }}</p>
            <br>
            <p class="text-center"><a class="btn btn-primary" :href="link" target="_blank">Read more</a></p>
        </div>
    </div>
</template>


<script>
    
export default{
    name: "recipeComponent",
    props: ["recipeImg", "title", "ingredients", "link"],
    data(){
        return{
            allIngredients: []
        }
    },
    beforeMount: function(){
        const app = this;
        const conversionUrl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://www.recipepuppy.com/api";
        
        fetch(conversionUrl + url)
            .then(function(response){
            return response.json();
        })
            .then(function(result){
            app.allIngredients = result.results.ingredients;
        })
    }
}
</script>


<style scoped>
    p{
        margin: 10px 10px;
    }
    
    img{
        width:33%;
    }
    
    .card{
        margin: 10px auto
    }
</style>