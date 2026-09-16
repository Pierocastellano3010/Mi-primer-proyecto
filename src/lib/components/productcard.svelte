<script>
    const { img, name, des, price } = $props();
</script>

<div>
    <div>
        <img src={img} alt="" />
        <p>{name}</p>
    </div>
    <div>
        <p>
            {des}
        </p>

        {#if price}
            <p>
                {price}
            </p>
        {/if}
        
        <div>
            <button>Explorar Colección</button>
        </div>
    </div>
</div>
