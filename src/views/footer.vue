<template>
    <div id="footer" class="footer">
        <h1> <span> <strong>©</strong> </span> Dev by Pattanachart </h1>
    </div>
</template>

<script setup>

</script>

<style scoped>
* {
    /* border: 1px solid black; */
}

#footer {
   /* position: absolute; */
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(247, 241, 241);
    text-align: center;
    margin-top: 1.5em;
    
}

h1 {
    font-size: 20px;
    padding: 5px;
    margin: 5px 0px;
    color: rgb(137, 150, 150)
}

@media screen and (max-height: 680px) {
   .footer{
    width: 100%;
    display: none;
  }
}
</style>