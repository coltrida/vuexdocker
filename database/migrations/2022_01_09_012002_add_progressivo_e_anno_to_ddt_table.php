<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddProgressivoEAnnoToDdtTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ddts', function (Blueprint $table) {
            $table->string('progressivo')->after('id')->nullable();
            $table->integer('anno')->nullable();
            $table->integer('mese')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ddts', function (Blueprint $table) {
            $table->dropColumn('progressivo');
            $table->dropColumn('anno');
            $table->dropColumn('mese');
        });
    }
}
