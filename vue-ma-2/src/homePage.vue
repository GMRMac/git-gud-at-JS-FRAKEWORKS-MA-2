<template>
    <div class="container">
        <div class="row">
            <div v-for="recipe in recipes" v-bind:key="recipe" class="col-sm-4">
                <recipeComponent    v-bind:recipeImg="recipe.thumbnail"    v-bind:title="recipe.title"
                                    v-bind:ingredients="recipe.ingredients"    v-bind:link="recipe.href"
                ></recipeComponent>
            </div>
        </div>
    </div>
</template>


<script>
import recipeComponent from "./components/recipeComponent.vue"
    
export default{
    name: "HomePage",
    components: {
        recipeComponent
    },
    data(){
        return{
            recipes: []
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
            app.recipes = result.results;
        })
    }
}

</script>