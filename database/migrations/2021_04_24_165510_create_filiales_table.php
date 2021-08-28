<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('filiales', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('indirizzo')->nullable();
            $table->string('citta')->nullable();
            $table->string('telefono')->nullable();
            $table->string('cap')->nullable();
            $table->string('provincia')->nullable();
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
        Schema::dropIfExists('filiales');
    }
}
