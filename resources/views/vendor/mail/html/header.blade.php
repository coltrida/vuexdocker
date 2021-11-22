<tr>
<td>
<img src="{{asset('img/logo-centroudito.png')}}" style="width:20%; margin-top: 10px; margin-left: 10px" alt="App Logo">
</td>
</tr>
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
