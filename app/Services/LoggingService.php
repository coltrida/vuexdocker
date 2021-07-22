<?php


namespace App\Services;


use Spatie\Activitylog\Models\Activity;

class LoggingService
{
    public function scriviLog($oggetto, $soggetto, $nomeSoggetto, $propieta, $testo)
    {
        activity()
            ->performedOn($oggetto)
            ->causedBy($soggetto)
            ->withProperties([
                ['customProperty' => $propieta],
                ['nomeSoggetto' => $nomeSoggetto]
            ])
            ->log($testo);
    }

    public function lista()
    {
        return Activity::latest()->get();
    }
}
