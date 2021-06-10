<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeltasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deltas', function (Blueprint $table) {
            $table->id()->startingValue(2000);
            $table->string('nome')->nullable();
            $table->bigInteger('user_id')->nullable();
            $table->float('budgetAnno')->nullable();
            $table->float('premio')->nullable();
            $table->float('stipendio')->nullable();
            $table->float('provvigione')->nullable();
            $table->float('gennaio')->nullable();
            $table->float('febbraio')->nullable();
            $table->float('marzo')->nullable();
            $table->float('aprile')->nullable();
            $table->float('maggio')->nullable();
            $table->float('giugno')->nullable();
            $table->float('luglio')->nullable();
            $table->float('agosto')->nullable();
            $table->float('settembre')->nullable();
            $table->float('ottobre')->nullable();
            $table->float('novembre')->nullable();
            $table->float('dicembre')->nullable();
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
        Schema::dropIfExists('deltas');
    }
}
