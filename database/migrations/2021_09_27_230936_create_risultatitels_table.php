<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRisultatitelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('risultatitels', function (Blueprint $table) {
            $table->id();
            $table->string('mese');
            $table->integer('mesenumero');
            $table->integer('anno');
            $table->integer('telefonate');
            $table->integer('appuntamenti');
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
        Schema::dropIfExists('risultatitels');
    }
}
