<?php


namespace App\Services;


use App\Models\Client;
use App\Models\Documento;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Storage;

class DocumentoService
{
    public function salvaDocumento($request)
    {
        if($request->hasfile('file')) {
            //dd($request->idClient);
            $mese = Carbon::now()->month;
            $anno = Carbon::now()->year;

            $file = $request->file('file');
            $filename = $request->tipo.$mese.$anno.'.pdf';
            Storage::disk('public')->putFileAs('/documenti/'.$request->idClient.'/', $file, $filename);

            $documento = new Documento();
            $documento->client_id = $request->idClient;
            $documento->tipo = $request->tipo;
            $documento->link = '/storage/documenti/'.$request->idClient.'/'.$filename;
            $documento->save();

            return $documento;
        }
    }

    public function salvaFileXmlFromFiliale($request)
    {
        if($request->hasfile('file')) {
            $file = $request->file('file');
            $filename = $request->nomeFile;
            $path = $request->fileName;
            Storage::disk('public')->putFileAs($path, $file, $filename);
        }
    }

    public function caricaDocumenti($idClient)
    {
        return Client::with('documenti')->find($idClient)->documenti;
    }

    public function eliminaDocumento($idDocumento)
    {
        $documento = Documento::find($idDocumento);
        $file = Str::substr($documento->link, 8);
        //dd($file);
        Storage::disk('public')->delete($file);

        $documento->delete();
    }
}
