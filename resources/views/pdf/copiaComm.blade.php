<div style="display:flex">
    <div style="font-size: 14px">
        <img src="{{public_path('img/logo-centroudito.jpg')}}" style="width: 200px">
        <div>Centro Udito</div>
        <div>via Roma 12</div>
        <div>50125 Pisa</div>
        <div>p.iva: 65465464564</div>
    </div>
    <div style="float: right; font-size: 14px">
        <div>Copia Commissione nr.{{$provaSalvata->id}} del {{$provaSalvata->created_at->format('d-m-Y')}}</div>
        <br>
        <div>{{$provaSalvata->client->nome}} {{$provaSalvata->client->cognome}}</div>
        <div>{{$provaSalvata->client->indirizzo}}</div>
        <div>{{$provaSalvata->client->cap}} {{$provaSalvata->client->citta}} {{$provaSalvata->client->provincia}}</div>
        <div>{{$provaSalvata->client->codfisc}}</div>
    </div>

</div>

<hr>

<br><br>

<div style="border: 1px solid black; height: 320px; width: 100%">
    <table style="width: 100%; margin-bottom: 40px">
        <tr>
            <td style="width: 33%">Matricola</td>
            <td style="width: 34%">Prodotto</td>
            <td style="width: 33%">Prezzo</td>
        </tr>
        @foreach($provaSalvata->product as $product)
            <tr>
                <td style="border: 1px solid black;width: 33%; padding: 5px">{{$product->matricola}}</td>
                <td style="border: 1px solid black;width: 34%; padding: 5px">{{$product->listino->nome}}</td>
                <td style="border: 1px solid black;width: 33%; padding: 5px">{{$product->pivot->prezzo}}</td>
            </tr>
        @endforeach
    </table>

    <div style="display:flex; font-size: 24px;">
        <div style="margin-left: 5px">Totale: </div>
        <div style="float: right; margin-right: 180px">
            {{$provaSalvata->tot}}
        </div>
    </div>

</div>

<div style="border: 1px solid black; height: 400px; width: 100%; margin-top: 10px; margin-bottom: 30px; padding: 10px">
    <h3>Informativa Privacy</h3>
    <p>
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
        lsdkjf òlsdkjf òlksdfòlj dslòf jkld sjlòf jdklsòj fldslòkf lkdjslf jklòsd j
    </p>
</div>

<div style="display:flex;">
    <div style="font-size: 14px">
        <div style="margin-left: 5px">Data: {{$provaSalvata->created_at->format('d-m-Y')}}</div>
    </div>
    <div style="float: right; font-size: 14px; margin-right: 40px">
        <div>Firma</div>
    </div>
</div>

