<script>
    const { img, name, des, price } = $props();
</script>

<div>
    <div>
        <img src={ img } alt="" />
        <p>{ name }</p>
    </div>
    <div>
        <p>
            { des }
        </p>
        <p>
            {price}
        </p>
        <div>
            <button class="rounded px-2 bg-amber-100">Añadir</button>
        </div>
    </div>
</div>
