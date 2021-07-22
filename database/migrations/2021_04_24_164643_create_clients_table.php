<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('cognome');
            $table->string('codfisc')->unique()->nullable();
            $table->string('indirizzo');
            $table->string('citta');
            $table->string('cap');
            $table->string('provincia');
            $table->string('telefono');
            $table->bigInteger('tipologia_id');
            $table->string('mail')->nullable();
            $table->char('recall')->nullable();
            $table->date('datarecall')->nullable();
            $table->date('datanascita')->nullable();
            $table->integer('meseNascita')->nullable();
            $table->integer('giornoNascita')->nullable();
            $table->bigInteger('marketing_id')->unsigned()->nullable();
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->bigInteger('filiale_id')->unsigned()->nullable();
            $table->bigInteger('recapito_id')->unsigned()->nullable();
            $table->integer('mese')->nullable();
            $table->integer('anno')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
