package com.selfproduct.upwatcher;

import com.facebook.react.ReactActivity;
import com.oblador.vectoricons.VectorIconsPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.cboy.rn.splashscreen.SplashScreen;
import android.os.Bundle;
import android.content.Intent;
import android.content.res.Configuration;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "upwatcher";
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }
}
