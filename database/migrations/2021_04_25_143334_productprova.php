<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Productprova extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_prova', function (Blueprint $table) {
            $table->id();
     //       $table->bigInteger('prova_id')->onDelete('cascade')->unsigned();
            $table->bigInteger('product_id')->unsigned();
            $table->string('orecchio')->nullable();
            $table->string('prezzo')->nullable();
            $table->string('prezzo_formattato')->nullable();
            $table->timestamps();
            $table->foreignId('prova_id')
                ->constrained('provas')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productprova');
    }
}
