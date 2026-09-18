<script>
    const { img, name, des, slug } = $props();
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


            <div>
                <button>Explorar Colección</button>
            </div>
        </div>
    </div>
</a>
