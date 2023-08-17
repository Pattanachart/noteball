<template>
    <div class="container-fluid">
        <div id="footer" class="footer">
            <h1> <span> <strong>©</strong> </span> Dev by Pattanachart </h1>
            <p>© 2023 All Rights Reserved. Design by Pattanachart</p>
            <!-- <p @click="showConfetti">AAAAA</p> -->
        </div>
    </div>
</template>
<script setup>

// import JSConfetti from 'js-confetti'
// const confetti = new JSConfetti()
// function showConfetti() {
//   confetti.addConfetti()
// }
// showConfetti()

</script>

<style scoped>
* {
    /* border: 1px solid black; */
}
.container-fluid{
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(247, 241, 241);
    text-align: center;
    margin-top: 1.5em;
  
}
#footer {
    /* position: absolute; */
    /* left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(247, 241, 241);
    text-align: center;
    margin-top: 1.5em; */

}

h1,
p {
    font-size: 1vw;
    padding: 5px;
    margin: 5px 0px;
    color: rgb(137, 150, 150)
}

@media screen and (max-height: 680px) {
    .container-fluid {
        width: 100%;
        display: none;
    }

}
/* @media screen and (max-width: 1000px) {

    h1,
    p {
        font-size: 10px;
    } 
}*/
</style>