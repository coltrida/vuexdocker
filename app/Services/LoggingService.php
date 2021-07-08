<?php


namespace App\Services;


class LoggingService
{
    public function scriviLog($oggetto, $soggetto, $propieta, $testo)
    {
        activity()
            ->performedOn($oggetto)
            ->causedBy($soggetto)
            ->withProperties(['customProperty' => $propieta])
            ->log($testo);
    }
}
