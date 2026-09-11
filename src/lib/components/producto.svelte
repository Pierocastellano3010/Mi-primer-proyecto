<script>
    const { img, name, des } = $props();
</script>

<div>
    <div>
        <img src={img} alt="" />
        <p>{ name }</p>
    </div>
    <div>
        <p>
            { des }
        </p>
        <div>
            <button>Explorar Colección</button>
        </div>
    </div>
</div>
