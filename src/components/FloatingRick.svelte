<script lang="ts">
    import rick from '../assets/rick.gif'
    
    export let left: boolean;
</script>

<div class={left ? "left" : undefined}>
    <img src={rick} alt="Vliegende Rick" />
</div>

<style>
    div {
        position: fixed;
        bottom: -20px;
        right: 0;
        max-width: 180px;
        width: 100%;
        z-index: 9999;
    }

    div.left {
        display: none;
        right: auto;
        left: 0;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    @media (min-width: 768px) {
        div {
            right: 20px;
            max-width: 240px;
        }
        
        div.left {
            display: block;
            left: 20px;
        }
    }
</style>