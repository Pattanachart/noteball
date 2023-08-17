<template>
    <div class="container-fluid">
        <div id="footer" class="footer">
            <h1> <span> <strong>©</strong> </span> Dev by Pattanachart </h1>
            <p>© 2023 All Rights Reserved. Design by Pattanachart</p>
            <!-- <p @click="showConfetti">AAAAA</p> -->

            <div class="container">
                <div class="d-flex">
                    <div class="col-md-3 col-3">
                        <hr>
                    </div>
                </div>
                
            </div>
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
hr{
    
    border: 1.5px double rgb(211, 204, 204,0.4);
    width: 100%;
}
.container{
    margin-bottom: -5rem ;
}
.container-fluid{
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(247, 241, 241);
    text-align: center;
    margin-top: 1.5em;
  
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
</style>