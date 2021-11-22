@component('mail::message')

Gentile <h3>{{$client['nome']}} {{$client['cognome']}},</h3><br>

{{$testoMessaggio}}

Un cordiale saluto,<br><br>

{{ config('app.name') }}
@endcomponent
