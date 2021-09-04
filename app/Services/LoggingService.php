<?php


namespace App\Services;


use App\Models\Activitylog;
use Carbon\Carbon;
use DB;
use Storage;
use Spatie\Activitylog\Models\Activity;
use Spatie\DbDumper\Databases\MySql;

class LoggingService
{
    public function scriviLog($oggetto, $soggetto, $nomeSoggetto, $propieta, $testo)
    {
        $log = new Activitylog();
        $log->description = $testo;
        $log->log_name = $propieta;
        $log->event = $oggetto;
        $log->subject_type = $nomeSoggetto;
        $log->save();

        /*activity()
            ->performedOn($oggetto)
            ->causedBy($soggetto)
            ->withProperties([
                ['customProperty' => $propieta],
                ['nomeSoggetto' => $nomeSoggetto]
            ])
            ->log($testo);*/
    }

    public function lista()
    {
        return Activitylog::latest()->get();
    }

    public function backup()
    {
        $mysqlDatabaseName =env('DB_DATABASE');
        $mysqlUserName = env('DB_USERNAME');
        $mysqlPassword = env('DB_PASSWORD');
        $mysqlHostName = env('DB_HOST');
        $mysqlExportPath ='backup.sql';

        $command='mysqldump --opt -h' .$mysqlHostName .' -u' .$mysqlUserName .' -p' .$mysqlPassword .' ' .$mysqlDatabaseName .' > storage/' .$mysqlExportPath;
        exec($command,$output,$worked);
        $res = '';
//dd(Storage::disk('public')->exists('/backup.sql'));
        switch($worked) {
            case 0:
                redirect(asset('storage/backup.sql'));
               // Storage::disk('public')->download('/backup.sql');
                $res = 'Il database' . $mysqlDatabaseName . ' è stato eseguito con successo';
                break;
            case 1:
                $res = 'Si è verificato un errore durante la esportatione da <b>' . $mysqlDatabaseName . '</b> a ' . getcwd() . '/' . $mysqlExportPath . '</b>';
                break;
            case 2:
                $res = 'Si è verificato un errore di esportazione, controllare le seguenti informazioni: <br/><br/><table><tr><td>MySQL Database Name:</td><td><b>' . $mysqlDatabaseName . '</b></td></tr><tr><td>MySQL User Name:</td><td><b>' . $mysqlUserName . '</b></td></tr><tr><td>MySQL Password:</td><td><b>NOTSHOWN</b></td></tr><tr><td>MySQL Host Name:</td><td><b>' . $mysqlHostName . '</b></td></tr></table>';
                break;
        }
        return $res;
    }

    public function restore()
    {
        $mysqlDatabaseName =env('DB_DATABASE');
        $mysqlUserName = env('DB_USERNAME');
        $mysqlPassword = env('DB_PASSWORD');
        $mysqlHostName = env('DB_HOST');
        $mysqlImportFilename ='backup.sql';


        $command='mysql -h' .$mysqlHostName .' -u' .$mysqlUserName .' -p' .$mysqlPassword .' ' .$mysqlDatabaseName .' < ' .$mysqlImportFilename;
        exec($command,$output,$worked);
        switch($worked){
            case 0:
                echo 'I dati del file <b>' .$mysqlImportFilename .'</b> sono stati importati con successo nella banca dati <b>' .$mysqlDatabaseName .'</b>';
                break;
            case 1:
                echo 'Si è verificato un errore durante la importazione. Controllare se il file si trova nella stessa cartella dello script. Controllare nuovamente anche i seguenti dati:<br/><br/><table><tr><td>MySQL Database Name:</td><td><b>' .$mysqlDatabaseName .'</b></td></tr><tr><td>MySQL User Name:</td><td><b>' .$mysqlUserName .'</b></td></tr><tr><td>MySQL Password:</td><td><b>NOTSHOWN</b></td></tr><tr><td>MySQL Host Name:</td><td><b>' .$mysqlHostName .'</b></td></tr><tr><td>MySQL Import Dateiname:</td><td><b>' .$mysqlImportFilename .'</b></td></tr></table>';
                break;
        }
    }
}
