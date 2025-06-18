/* 
In this kata we are going to mimic a software versioning system.

You have to implement a VersionManager class.

It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

This class should support the following methods, all of which should be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. Multiple calls to rollback() should be possible and restore the version history
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
May the binary force be with you!
*/

import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class VersionManager {

    // variabili d'istanza
    public int major = 0;
    public int minor = 0;
    public int patch = 0;
    // creo uno Stack dove salvare gli stati precedenti (stati sotto forma di List)
    public Stack<List<Integer>> history = new Stack<>();

    // costruttore di default
    public VersionManager() {
        this.major = 0;
        this.minor = 0;
        this.patch = 1;
    }

    // costruttore con String come parametro
    public VersionManager(String version) {
        // se la striga è vuota o null
        if (version == null || version.isEmpty()) {
            this.major = 0;
            this.minor = 0;
            this.patch = 1;
            // altrimenti
        } else {
            // crea un arrai formato da ogni carattere di "version" diviso da un "."
            String[] versionParts = version.split("\\.");
            // prova
            try {
                // trasformo il numero(sotto forma di stringa) all'indice 0 in un int
                this.major = Integer.parseInt(versionParts[0]);
                // se la lunghezza di "versionParts" è > 1
                // trasformo il numero(sotto forma di stringa) all'indice 1 in un int
                // altrimenti assegno 0
                this.minor = versionParts.length > 1 ? Integer.parseInt(versionParts[1]) : 0;
                // se la lunghezza di "versionParts" è > 2
                // trasformo il numero(sotto forma di stringa) all'indice 2 in un int
                // altrimenti assegno 0
                this.patch = versionParts.length > 2 ? Integer.parseInt(versionParts[2]) : 0;
                // se c'è un errore nel parsing (tipo lettere al posto dei numeri)
            } catch (Exception exception) {
                throw new RuntimeException("Error occured while parsing version!");
            }
        }
    }

    // metodi
    public VersionManager major() {
        // salvo la versione precedente come List in uno Stack
        history.push(Arrays.asList(major, minor, patch));
        this.major++;
        this.minor = 0;
        this.patch = 0;
        return this;
    }

    public VersionManager minor() {
        // salvo la versione precedente come List in uno Stack
        history.push(Arrays.asList(major, minor, patch));
        this.minor++;
        this.patch = 0;
        return this;
    }

    public VersionManager patch() {
        // salvo la versione precedente come List in uno Stack
        history.push(Arrays.asList(major, minor, patch));
        this.patch++;
        return this;
    }

    public String release() {
        return String.format("%d.%d.%d", this.major, this.minor, this.patch);
    }

    public VersionManager rollback() {
        if (history.isEmpty()) {
            throw new RuntimeException("Cannot rollback!");
        }
        List<Integer> lastVersion = history.pop();
        this.major = lastVersion.get(0);
        this.minor = lastVersion.get(1);
        this.patch = lastVersion.get(2);
        return this;
    }

    // metodo main per testare
    public static void main(String[] args) {

        VersionManager versionManager = new VersionManager();

        System.out.println(versionManager.release());

        System.out.println(versionManager.major().release());

        System.out.println(versionManager.rollback().release());
    }
}
