<?php


namespace App\Services;


use Carbon\Carbon;
use DB;
use Spatie\Activitylog\Models\Activity;
use Spatie\DbDumper\Databases\MySql;

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

    public function backup()
    {
        $filename = "backup.sql";

        return MySql::create()
            ->setDbName(env('DB_DATABASE'))
            ->setUserName(env('DB_USERNAME'))
            ->setPassword(env('DB_PASSWORD'))
            ->dumpToFile($filename);

    }

    public function restore()
    {
        $filename = 'backup.sql';
        DB::unprepared(file_get_contents($filename));
    }
}
