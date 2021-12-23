<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventigiornosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eventigiornos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('quando');
            $table->date('giorno');
            $table->string('cosa');
            $table->string('evento')->nullable();
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
        Schema::dropIfExists('eventigiornos');
    }
}
