<template>
    <div>
        <div class="section-container">
           <div class="section-side">
                <div class="section-side-1" id="player-0">
                   <div class="">
                        <h2 class="player-heading">Player 1</h2>

                        <h5 class="player-count">0</h5>
                   </div>

                    <div class="player-current">
                        <h6>current</h6>
                        <h6 class="player-current-count">{{score}}</h6>
                    </div>
                </div>
                <div class="section-side-2" id="player-1">
                    <div class="">
                        <h2 class="player-heading">Player 2</h2>

                        <h5 class="player-count">0</h5>
                    </div>

                    <div class="player-current">
                        <h6>current</h6>
                        <h6 class="player-current-count">0</h6>
                    </div>
                </div>
                <img src="/images/dice-5.png" alt="" id="images" class="img-edit">
                <button class="btn-1" @click="game">
                    <span class="btn-1-1">new game</span>
                </button>
                <button class="btn-2" @click="roll">
                    <span class="btn-1-1">roll dice</span>                        
                </button>
                <button class="btn-3" @click="hold">
                    <span class="btn-1-1">hold</span>                    
                </button>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            player:[0,0],
            gaming:true,
            score:0,
            activePlayer:[0,1],
            a: 0,
            b: 0,
            age: 20
        };
    },
    methods: {
        game(){
            console.log('game on');
        },
        roll(){
            var dice = Math.floor(Math.random() * 6) + 1;
            var imgDOM = document.querySelector('.img-edit');
            imgDOM.src = '/images/dice-' + dice + '.png';
            let player1 = document.querySelector('#player-0');

            player1.classList.add('active');
            if(dice !== 1) {
                var record = this.score += Math.floor(Math.random() * 6) + 1;
                console.log(record);
            }else{
                console.log('starter');
            }
            // pcc.textContent = record;
            
            console.log('Rolled ' + dice);
        },
        hold() {
            console.log('On Hold');
        }
    },
    computed: {
        
    }
}
</script>
<style scoped>
    .active{
       background-color: rgba(224, 224, 224, 0.466);
    }
    .player-heading{
        font-size: 4rem;
        font-weight: 300;
    }
    .player-count{
        font-size: 6rem;
        font-weight: 500;
        color:rgba(240, 53, 84, 0.89);
    }
    .player-current{
        width:35%;
        height:8rem;
        align-self: center;
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        justify-content: space-between;
        background-color: rgba(240, 53, 84, 0.89);
        padding:1rem 0rem;
    }
    .player-current-count{
        font-size: 3rem;
        color: #fff;
    }
    .winner{
        color:brown;
    }
    .section-side{
        height:100%;
        display: flex;
        /* background-color: red; */
    }
    .section-side-1, .section-side-2{
        flex:1;
        padding: 8rem 7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }
    .section-side-2{
        /* background-color: green; */
    }
    .section-container{
        width:70vw;
        height:95vh;
        margin: 0 auto;
        margin-top: 1.7rem;
        background-color: #fff;
        box-shadow: 1rem 2rem 4rem rgba(0,0,0,.6);
        position: relative;
        text-transform: uppercase;
    }
   
    .btn-1,
    .btn-2,
    .btn-3{
        position: absolute;
        transform: translate(50%,50%);
        text-transform: uppercase;
        background: none;
        outline: none;
        border: none;
        font-size: 2rem;
        letter-spacing: 1px;
        cursor: pointer;
        transition: .3s all;
    }
    .btn-1{
        top:5rem;
        left:37.5rem;
    }
    .btn-1:hover,.btn-2:hover,.btn-3:hover{
        transform: translate(50%,50%) scale(1.3);
    }
    .btn-1-1{
        transition: .3s all;
    }
    .btn-1-1:hover{
        /* margin-left: 1rem; */
        font-weight: 900;
    }
    .btn-2{
        bottom:16rem;
        left:37.5rem;
    }
    .btn-3{
        bottom:10rem;
        left:42.5rem;
    }
    .img-edit{
        position: absolute;
        top:10rem;
        left:36rem;
        transform: translate(50%,50%);
        width:12%;
        box-shadow: 2rem 1rem 3rem rgba(0,0,0,.1);
    }
</style>