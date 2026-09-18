<script>
    const { img, name, des, price, slug } = $props();
</script>

<a href={"/catalogo/" + slug}>
 
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
                <button>Añadir</button>
            </div>
        </div>

    </div>
</a>
